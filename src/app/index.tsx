import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Add logic to check if onboarding is completed and if user is logged in
  return <Redirect href="/onboarding" />;
}
