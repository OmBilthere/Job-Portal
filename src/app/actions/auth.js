"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { createClient } from "@/lib/supabase/server";
import { createSession } from "@/lib/auth/session";

export async function login(formData) {
    const email = formData.get("email")?.trim();
    const password = formData.get("password");

    if (!email || !password) {
        return {
            success: false,
            message: "Email and password are required",
        };
    }

    const supabase = await createClient();

    const { data: user, error } = await supabase.from("users").select(`id,name,email,number,password,role_id,roles (id,name)`).eq("email", email).single();

    if (error || !user) {
        return {
            success: false,
            message: "Invalid email or password",
        };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return {
            success: false,
            message: "Invalid email or password",
        };
    }

    await createSession(user.id);

    return {
        success: true,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            number: user.number,
            role_id: user.role_id,
            role: user.roles?.name || null,
        },
    };
}

export async function register(formData) {
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const number = formData.get("number")?.trim();
    const password = formData.get("password");

    if (!name || !email || !number || !password) {
        return {
            success: false,
            message: "All fields are required",
        };
    }

    if (password.length < 6) {
        return {
            success: false,
            message: "Password must be at least 6 characters",
        };
    }

    const supabase = await createClient();

    const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).maybeSingle();

    if (existingUser) {
        return {
            success: false,
            message: "Email already registered",
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: user, error } = await supabase.from("users").insert({name,email,number,password: hashedPassword,role_id: 3,}).select("id, name, email, number, role_id").single();

    if (error) {
        console.error("Register error:", error);

        return {
            success: false,
            message: "Registration failed",
        };
    }

    return {
        success: true,
        message: "Registration successful",
        user,
    };
}

export async function logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  if (token) {
    const supabase = await createClient();

    await supabase
      .from("sessions")
      .delete()
      .eq("token", token);
  }

  cookieStore.delete("session_token");

  return {
    success: true,
  };
}