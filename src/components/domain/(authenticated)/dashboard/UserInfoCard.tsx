import type { UserInfo } from "@/types/user";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

interface UserInfoCardProps {
  user: UserInfo;
}

const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src={user.image || undefined}
            alt={user.name}
            sx={{ width: 80, height: 80 }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>

          <Typography variant="h5" component="h2" textAlign="center">
            {user.name}
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            {user.email}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography variant="body2" color="text.secondary">
              メール認証:
            </Typography>
            <Typography
              variant="body2"
              color={user.emailVerified ? "success.main" : "warning.main"}
              fontWeight="bold"
            >
              {user.emailVerified ? "認証済み" : "未認証"}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            textAlign="center"
          >
            登録日: {new Date(user.createdAt).toLocaleDateString("ja-JP")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
