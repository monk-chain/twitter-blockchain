import ContainerPage from '@/components/layout/Container/Container';
import { SideBar } from '@/components/layout/Sidebar/Sidebar';
import { InputModal } from '@/components/layout/Wallet/InputModal';
import { LogoutModal } from '@/components/layout/Wallet/LogoutModal';
import { SelectWalletModal } from '@/components/layout/Wallet/SelectWalletModal';

export default function HomePage() {
  return (
    <>
      <div className='mx-auto flex min-h-screen max-w-7xl'>
        <SideBar />
        <main className='border-primary-container_border_color flex flex-1 flex-col border-r border-l border-b bg-black'>
          <ContainerPage />
        </main>
        {/* <aside className='w-350 bg-black'>
          <AllBox />
        </aside> */}
        <SelectWalletModal />
        <LogoutModal />
        <InputModal />
      </div>
    </>
  );
}
