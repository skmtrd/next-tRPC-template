"use client";

import PageContainer from "@/components/common/PageContainer";
import { authClient } from "@/lib/auth-client";
import type { UserInfo } from "@/types/user";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import UserInfoCard from "./UserInfoCard";

interface DashboardPageProps {
  user: UserInfo;
}

const DashboardPage = ({ user }: DashboardPageProps) => {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <PageContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center">
          ダッシュボード
        </Typography>

        <UserInfoCard user={user} />

        <Button variant="contained" onClick={handleSignOut}>
          ログアウト
        </Button>
      </Box>
    </PageContainer>
  );
};

export default DashboardPage;
