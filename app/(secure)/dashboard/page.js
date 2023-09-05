"use client"
// pages/admin/dashboard.js
import DashboardOverview from '../components/dashboard/DashboardOverview';
import HelpAndSupport from '../components/dashboard/HelpAndSupport';
import LogsAndActivity from '@/components/dashboard/Logs';
import Notifications from '@/components/dashboard/Notifications';
import ReportsAndAnalytics from '@/components/dashboard/ReportsAndAnalytics';
import RoleAndPermissionsManagement from '@/components/dashboard/RolesAndPermissions';
import ServicesManagement from '@/components/dashboard/ServicesManagement';
import Settings from '@/components/dashboard/Settings';
import UserManagement from '@/components/dashboard/UserManagement';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-semibold">Welcome to Admin</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Dashboard Overview */}
          <div>
            <DashboardOverview userCount={100} serviceCount={50} />
          </div>

          {/* User Management */}
          <div className="bg-blue-200 p-4 rounded shadow">
            <UserManagement />
          </div>

          {/* Services Management */}
          <div className="bg-green-200 p-4 rounded shadow">
            <ServicesManagement />
          </div>

          {/* Settings */}
          <div>
            <Settings />
          </div>

          {/* Logs */}
          <div>
            <LogsAndActivity />
          </div>

          {/* Notifications */}
          <div className="bg-yellow-200 p-4 rounded shadow">
            <Notifications />
          </div>

          {/* Reports and Analytics */}
          <div className="bg-purple-200 p-4 rounded shadow">
            <ReportsAndAnalytics />
          </div>

          {/* Roles and Permissions */}
          <div className="bg-orange-200 p-4 rounded shadow">
            <RoleAndPermissionsManagement />
          </div>

          {/* Help and Support */}
          <div className="bg-pink-200 p-4 rounded shadow">
            <HelpAndSupport />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

