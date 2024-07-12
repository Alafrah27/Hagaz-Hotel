import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://giymyfuunkytwkoaosbl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeW15ZnV1bmt5dHdrb2Fvc2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDM3ODMsImV4cCI6MjAzNDAxOTc4M30.JUL7OzDshCVWRNUgtIOm586agCor4iTCrzCz4zP1u4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
