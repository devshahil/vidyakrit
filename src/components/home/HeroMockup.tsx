"use client";

import React, { useState } from 'react';
import { Shield, CreditCard, CheckCircle, Search, User, MapPin } from 'lucide-react';

export const HeroMockup = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'attendance'>('overview');

  return (
    <div 
      style={{
        width: '100%',
        background: '#ffffff',
        borderRadius: '18px',
        border: '1px solid #e0e0e0',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 30px 60px 0px',
        overflow: 'hidden',
        fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Windows Mac Style Header Bar */}
      <div 
        style={{
          height: '48px',
          background: '#f5f5f7',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px'
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
        </div>
        <div 
          style={{
            background: '#e0e0e0',
            fontSize: '11px',
            color: '#1d1d1f',
            padding: '4px 32px',
            borderRadius: '9999px',
            width: '280px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Search size={10} /> erp.vidyakrit.in
        </div>
        <div style={{ width: '40px' }}></div>
      </div>

      {/* Main Body */}
      <div style={{ display: 'flex', minHeight: '340px' }}>
        {/* Mock Sidebar */}
        <div 
          style={{
            width: '160px',
            borderRight: '1px solid #e0e0e0',
            background: '#fafafc',
            padding: '16px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'fees', label: 'Fee Collection' },
            { id: 'attendance', label: 'GPS Attendance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? 600 : 400,
                color: activeTab === tab.id ? '#0066cc' : '#1d1d1f',
                background: activeTab === tab.id ? 'rgba(0, 102, 204, 0.06)' : 'transparent',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
          
          <div style={{ marginTop: 'auto', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
            <Shield size={12} color="#27c93f" />
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Secured</span>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1d1d1f', margin: 0 }}>Vidyakrit OS Dashboard</h4>
                <span style={{ fontSize: '12px', color: '#27c93f', background: 'rgba(39, 201, 63, 0.1)', padding: '2px 8px', borderRadius: '9999px', fontWeight: 600 }}>Live</span>
              </div>

              {/* Metric Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px', background: '#fafafc' }}>
                  <span style={{ fontSize: '11px', color: '#6e6e73', display: 'block', marginBottom: '4px' }}>Expected Fee</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#1d1d1f' }}>₹14,50,000</span>
                </div>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px', background: '#fafafc' }}>
                  <span style={{ fontSize: '11px', color: '#6e6e73', display: 'block', marginBottom: '4px' }}>Live Attendance</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#27c93f' }}>96.8%</span>
                </div>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '12px', background: '#fafafc' }}>
                  <span style={{ fontSize: '11px', color: '#6e6e73', display: 'block', marginBottom: '4px' }}>Total Students</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#1d1d1f' }}>1,480</span>
                </div>
              </div>

              {/* Status List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#6e6e73', textTransform: 'uppercase' }}>Recent Activity</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', borderBottom: '1px solid #f5f5f7', paddingBottom: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></span>
                  <span style={{ color: '#1d1d1f', fontWeight: 500 }}>Class 10-A</span>
                  <span style={{ color: '#6e6e73' }}>marked attendance successfully</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', borderBottom: '1px solid #f5f5f7', paddingBottom: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0066cc' }}></span>
                  <span style={{ color: '#1d1d1f', fontWeight: 500 }}>Admissions Desk</span>
                  <span style={{ color: '#6e6e73' }}>processed new registration</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1d1d1f', margin: 0 }}>Instant Fee Collection</h4>
                <CreditCard size={18} color="#0066cc" />
              </div>

              {/* Input Form Simulation */}
              <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '16px', background: '#fafafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1d1d1f', display: 'block' }}>Aarav Sharma</span>
                    <span style={{ fontSize: '11px', color: '#6e6e73' }}>Admission #20260408 · Class 8-B</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#0066cc' }}>₹6,500</span>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px' }}>
                  <span style={{ background: 'rgba(0, 102, 204, 0.1)', color: '#0066cc', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>Tuition Fee</span>
                  <span style={{ background: '#f5f5f7', color: '#6e6e73', padding: '4px 10px', borderRadius: '9999px' }}>Bus Route A</span>
                </div>
              </div>

              <div 
                style={{ 
                  background: 'rgba(39, 201, 63, 0.08)', 
                  border: '1px solid rgba(39, 201, 63, 0.2)', 
                  borderRadius: '12px', 
                  padding: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  fontSize: '12px',
                  color: '#27c93f'
                }}
              >
                <CheckCircle size={16} />
                <span>Collection cleared. WhatsApp receipt triggered to parent automatically.</span>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1d1d1f', margin: 0 }}>Staff Geofenced Attendance</h4>
                <MapPin size={18} color="#27c93f" />
              </div>

              {/* Map & GPS Visual */}
              <div 
                style={{ 
                  height: '100px', 
                  background: '#f0f4f8', 
                  borderRadius: '12px', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  border: '1px solid #e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Geofence Ring */}
                <div 
                  style={{
                    position: 'absolute',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(39, 201, 63, 0.15)',
                    border: '2px dashed #27c93f',
                    animation: 'pulse-glow 3s infinite'
                  }}
                ></div>
                {/* Center marker */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <MapPin size={24} color="#ff5f56" />
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#1d1d1f', background: '#ffffff', padding: '1px 4px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Main Campus</span>
                </div>
              </div>

              {/* GPS logs */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                <div>
                  <span style={{ fontWeight: 600, color: '#1d1d1f', display: 'block' }}>Teacher Rakesh Sen</span>
                  <span style={{ color: '#6e6e73', fontSize: '10px' }}>Verified within 40m boundary</span>
                </div>
                <span style={{ color: '#27c93f', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></span> Check In Passed
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Internal CSS injection for transitions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};
