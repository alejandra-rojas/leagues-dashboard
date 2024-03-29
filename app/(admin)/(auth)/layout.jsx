import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

//Components
import AuthPrimaryNavbar from "../../components/AuthPrimaryNavbar";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/admin");
  }

  return (
    <>
      <AuthPrimaryNavbar />
      {children}
    </>
  );
}
