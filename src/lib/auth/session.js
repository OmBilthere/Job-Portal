import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function createSession(userId) {
    const supabase = await createClient();
    const token = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const { error } = await supabase.from("sessions").insert({
            user_id: userId,
            token,
            expires_at: expiresAt.toISOString(),
        });

    if (error) throw error;

    const cookieStore = await cookies();

    cookieStore.set("session_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: expiresAt,
        path: "/",
    });

    return token;
}

export async function getSessionUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get("session_token")?.value;
    console.log("Session Token:", token);   
    if (!token) return null;

    const supabase = await createClient();

    const { data, error } = await supabase.from("sessions").select(`user_id,expires_at,users (id,name,email,number,role_id,roles (id,name))`).eq("token", token).single();

    if (error || !data) return null;

    if (new Date(data.expires_at) < new Date()) {
        await supabase.from("sessions").delete().eq("token", token);

        cookieStore.delete("session_token");

        return null;
    }
    console.log("Session User Data:", data);
    return data.users;
}

export async function destroySession() {
    const cookieStore = await cookies();
    const token = cookieStore.get("session_token")?.value;

    if (token) {
        const supabase = await createClient();
        await supabase.from("sessions").delete().eq("token", token);
    }

    cookieStore.delete("session_token");
}