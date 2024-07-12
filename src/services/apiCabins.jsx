import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabin could not loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1. if create cabin is successfully

  // let query is using for create and edit cabin
  let query = supabase.from("cabins");
  // create a cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // this edit if there is id
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabin could not created");
  }

  if (hasImagePath) return data;
  // then uload the image
  //https://giymyfuunkytwkoaosbl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "cabin image could not be upload and the cabin was not created"
    );
  }

  return data;
}

// delete cabin api
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not deleted");
  }
  return data;
}
