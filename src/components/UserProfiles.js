// src/components/UserProfiles.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Card, CardContent, Typography } from "@mui/material";

export default function UserProfiles() {
  const { onlineUsers } = useAuth();

  return (
    <div>
      <Typography variant="h5" component="h3">
        Online Users
      </Typography>
      {onlineUsers.map((user) => (
        <Card key={user.uid} style={{ margin: "10px 0" }}>
          <CardContent>
            <Typography variant="h6">{user.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
