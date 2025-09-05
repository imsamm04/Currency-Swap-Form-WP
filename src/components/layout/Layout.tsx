import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastProvider } from '../../contexts/ToastContext';
import { WalletProvider } from '../../contexts/WalletContext';
import { cn } from '../../utils/cn';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <ToastProvider>
      <WalletProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50">
          {showHeader && <Header />}
          
          <main className={cn('flex-1', className)}>
            {children}
          </main>
          
          {showFooter && <Footer />}
        </div>
      </WalletProvider>
    </ToastProvider>
  );
};
