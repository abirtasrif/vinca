'use client';

import Button from '@/components/ui/Button';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation';
import SpecialistDetails from './_components/SpecialistDetails';

const SpecialistsDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: specialist,
    isLoading,
    error,
  } = useFetch(`/api/specialists/${params.id}`);

  const router = useRouter();

  return (
    <main>
      {isLoading && (
        <div className='flex min-h-screen items-center justify-center'>
          <Loading isLoading={isLoading} />
        </div>
      )}

      {error && (
        <div className='flex min-h-screen flex-col items-center justify-center gap-2.5'>
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}

      {specialist && <SpecialistDetails specialist={specialist} />}
    </main>
  );
};

export default SpecialistsDetailsPage;
