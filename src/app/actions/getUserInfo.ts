"use server";

import { getUserInfo } from "@/app/api/lib";

/**
 * 現在ログインしているユーザーの情報を取得する
 * 認証されていない場合はnullを返す
 */
export async function getCurrentUserInfo() {
  return await getUserInfo();
}
