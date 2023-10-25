import React from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {UserProfile} from '@auth0/nextjs-auth0/client';

type Props = {
  user: UserProfile | null | undefined;
  destinationPage: string;
  label: string;
};

const ProtectedLink = ({user, destinationPage, label}: Props): React.ReactNode => {
  //Reroutes user to home instead of protected page if not logged in

  const router = useRouter();

  if (user) {
    return <Link href={destinationPage}>{label}</Link>;
  } else {
    // Redirect to the home page
    router.push('/');
  }
};

export default ProtectedLink;
