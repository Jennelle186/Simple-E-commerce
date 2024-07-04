import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <p>Hello {data.user.email}</p>
    
       <Link href="/protected/account">Update your profile</Link>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
       footer
      </footer>
    </div>
  );
}
