"use client";
import { useState } from "react";
export default function DashboardPage() {
    const [name, setname] = useState("");
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input
                value={name}
                onChange={(e) => {
                    setname(e.target.value);
                }}
            />
            <p>Hello {name}</p>
        </div>
    );
}
