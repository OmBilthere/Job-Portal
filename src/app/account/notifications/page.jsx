"use client";

import { useState } from "react";

const notifications = [
  {
    id: 1,
    type: "application",
    title: "Your application is under review",
    message:
      "Microsoft has moved your Software Engineer application to the review stage.",
    time: "18 minutes ago",
    unread: true,
    icon: "briefcase",
  },
  {
    id: 2,
    type: "job",
    title: "12 new jobs match your profile",
    message:
      "New Software Engineer and Backend Engineer roles were found based on your preferences.",
    time: "2 hours ago",
    unread: true,
    icon: "spark",
  },
  {
    id: 3,
    type: "interview",
    title: "Interview coming up",
    message:
      "Your technical interview with Google is scheduled for September 18 at 11:00 AM.",
    time: "4 hours ago",
    unread: true,
    icon: "calendar",
  },
  {
    id: 4,
    type: "job",
    title: "A company you follow is hiring",
    message:
      "Atlassian has added 8 new engineering positions in India.",
    time: "Yesterday",
    unread: false,
    icon: "building",
  },
  {
    id: 5,
    type: "application",
    title: "Application submitted successfully",
    message:
      "Your application for Software Engineer I at Razorpay was submitted successfully.",
    time: "Yesterday",
    unread: false,
    icon: "check",
  },
  {
    id: 6,
    type: "job",
    title: "3 jobs are about to expire",
    message:
      "Some saved jobs in your list may no longer be available soon. Consider applying before they close.",
    time: "2 days ago",
    unread: false,
    icon: "clock",
  },
  {
    id: 7,
    type: "profile",
    title: "Complete your profile",
    message:
      "Your profile is 75% complete. Add your skills and experience to improve job recommendations.",
    time: "3 days ago",
    unread: false,
    icon: "user",
  },
  {
    id: 8,
    type: "application",
    title: "Application status updated",
    message:
      "Your application for SDE I at Amazon has been closed. Check your applications for more details.",
    time: "4 days ago",
    unread: false,
    icon: "close",
  },
];

const filters = ["All", "Jobs", "Applications", "Interviews", "Unread"];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [notificationList, setNotificationList] = useState(notifications);

  const unreadCount = notificationList.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = notificationList.filter((notification) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Jobs") return notification.type === "job";
    if (activeFilter === "Applications")
      return notification.type === "application";
    if (activeFilter === "Interviews")
      return notification.type === "interview";
    if (activeFilter === "Unread") return notification.unread;

    return true;
  });

  function markAsRead(id) {
    setNotificationList((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  }

  function markAllAsRead() {
    setNotificationList((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        {/* Header */}
        <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Notifications
              </h1>

              {unreadCount > 0 && (
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold text-white">
                  {unreadCount} new
                </span>
              )}
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Stay updated with your applications, interviews, and new job
              opportunities.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="w-fit text-xs font-semibold text-slate-700 transition hover:text-slate-950"
            >
              Mark all as read
            </button>
          )}
        </section>

        {/* Quick Stats */}
        <section className="mt-7 grid grid-cols-3 gap-3">
          <NotificationStat
            value={unreadCount}
            label="Unread"
          />

          <NotificationStat
            value="12"
            label="New Jobs"
          />

          <NotificationStat
            value="1"
            label="Upcoming Interview"
          />
        </section>

        {/* Filters */}
        <section className="mt-7">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-xs font-medium transition ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Notification List */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {filteredNotifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onRead={() => markAsRead(notification.id)}
                />
              ))}
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <BellIcon />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                No notifications
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                You&apos;re all caught up for this category.
              </p>
            </div>
          )}
        </section>

        {/* Notification Preferences */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Notification preferences
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Choose what updates you want to receive.
              </p>
            </div>

            <button
              type="button"
              className="w-fit rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Manage preferences →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function NotificationCard({ notification, onRead }) {
  const iconStyles = {
    job: "bg-violet-50 text-violet-600",
    application: "bg-slate-100 text-slate-700",
    interview: "bg-blue-50 text-blue-600",
    profile: "bg-amber-50 text-amber-600",
  };

  return (
    <div
      className={`group flex gap-4 px-5 py-5 transition hover:bg-slate-50 sm:px-6 ${
        notification.unread ? "bg-slate-[0.015]" : ""
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          iconStyles[notification.type] || "bg-slate-100 text-slate-600"
        }`}
      >
        <NotificationIcon type={notification.icon} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3
                className={`text-sm ${
                  notification.unread
                    ? "font-semibold text-slate-900"
                    : "font-medium text-slate-700"
                }`}
              >
                {notification.title}
              </h3>

              {notification.unread && (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              )}
            </div>

            <p className="mt-1.5 max-w-2xl text-xs leading-5 text-slate-500">
              {notification.message}
            </p>
          </div>

          <span className="shrink-0 text-[10px] text-slate-400">
            {notification.time}
          </span>
        </div>

        {/* Action */}
        <div className="mt-3 flex items-center gap-4">
          {notification.type === "job" && (
            <button
              type="button"
              className="text-[11px] font-semibold text-slate-800 hover:text-slate-950"
            >
              View Jobs →
            </button>
          )}

          {notification.type === "application" && (
            <button
              type="button"
              className="text-[11px] font-semibold text-slate-800 hover:text-slate-950"
            >
              View Application →
            </button>
          )}

          {notification.type === "interview" && (
            <button
              type="button"
              className="text-[11px] font-semibold text-slate-800 hover:text-slate-950"
            >
              View Interview →
            </button>
          )}

          {notification.unread && (
            <button
              type="button"
              onClick={onRead}
              className="text-[11px] font-medium text-slate-400 hover:text-slate-700"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function NotificationStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

function NotificationIcon({ type }) {
  if (type === "briefcase") {
    return <BriefcaseIcon />;
  }

  if (type === "spark") {
    return <SparkIcon />;
  }

  if (type === "calendar") {
    return <CalendarIcon />;
  }

  if (type === "building") {
    return <BuildingIcon />;
  }

  if (type === "check") {
    return <CheckIcon />;
  }

  if (type === "clock") {
    return <ClockIcon />;
  }

  if (type === "user") {
    return <UserIcon />;
  }

  if (type === "close") {
    return <CloseIcon />;
  }

  return <BellIcon />;
}

function BellIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 7h16v13H4V7Zm0 4h16M10 11v2h4v-2"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 21V5l8-2v18M12 21h8V9l-8-2M8 7v.01M8 11v.01M8 15v.01M16 12v.01M16 16v.01M16 20v.01"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path
        strokeLinecap="round"
        d="M5 20a7 7 0 0 1 14 0"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 7 10 10M17 7 7 17"
      />
    </svg>
  );
}