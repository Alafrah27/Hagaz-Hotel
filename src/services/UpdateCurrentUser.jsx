import supabase, { supabaseUrl } from "./supabase";

export async function UpdateCurrentUser({ fullName, password, avatar }) {
  // 1. update password or full name
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;
  //2.upload the avater image
  const fileName = `avatar-${data?.user?.id}-${Math.random()}`;

  const { error: storegeError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storegeError) throw new Error(storegeError.message);
  // 3.upload image in to user
  // https://giymyfuunkytwkoaosbl.supabase.co/storage/v1/object/public/avatars/cabin_005.jpg
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);

  return updatedUser;
}
