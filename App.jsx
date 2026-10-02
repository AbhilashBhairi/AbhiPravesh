import React, { useState } from 'react';
import { 
  GraduationCap, 
  FileText, 
  Upload, 
  CheckCircle2, 
  LayoutDashboard, 
  Home,
  AlertCircle,
  FileBadge,
  ChevronRight,
  BookOpen,
  LogOut,
  User
} from 'lucide-react';

const Navbar = ({ currentView, setCurrentView }) => (
  <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        {/* Logo and College Name */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setCurrentView('home')}
        >
          <div className="bg-white p-1.5 rounded-full">
            <GraduationCap className="h-6 w-6 text-blue-900" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">JNTUH Admissions</span>
          <span className="font-bold text-xl tracking-tight sm:hidden">JNTUH</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="flex space-x-2 sm:space-x-4 items-center">
          <button 
            onClick={() => setCurrentView('home')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hidden sm:flex ${currentView === 'home' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
          >
            <span className="flex items-center gap-2"><Home size={16} /> Home</span>
          </button>
          
          <div className="border-l border-blue-700 h-6 mx-2 hidden sm:block"></div>
          
          {/* Primary Action Button */}
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="bg-white text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm flex items-center gap-2"
          >
            {currentView === 'dashboard' ? <><User size={16}/> Student Profile</> : 'Apply Now'}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const LandingPage = ({ onApplyClick }) => {
  const steps = [
    {
      title: "1. Registration",
      desc: "Create your student account and fill in your basic personal and academic details.",
      icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      title: "2. Document Upload",
      desc: "Upload EAMCET rank card, SSC, Inter marks, and ePASS income/caste certificates.",
      icon: <Upload className="h-8 w-8 text-blue-600" />
    },
    {
      title: "3. Branch Preference",
      desc: "Select your preferred engineering branches (CSE, ECE, IT, etc.) for counseling.",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />
    },
    {
      title: "4. Seat Allotment",
      desc: "Wait for the administration to verify documents and confirm your admission.",
      icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Banner Section */}
      <div className="bg-blue-900 text-white py-16 sm:py-24 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            B.Tech First Year Admissions <br className="hidden sm:block" />
            <span className="text-blue-300 text-2xl sm:text-4xl">Academic Year 2026-2027</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
            Welcome to the official admission portal. Accepting applications for 
            Category-A (Convenor Quota) and Category-B (Management Quota) seats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button 
              onClick={onApplyClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Start Application <ChevronRight size={20} />
            </button>
            <button className="bg-blue-800 hover:bg-blue-700 text-white border border-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors w-full sm:w-auto">
              Read Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Admission Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Admission Process</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600">Complete these simple steps to secure your B.Tech seat.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ePASS Alert Banner */}
      <div className="bg-blue-50 border-t border-b border-blue-100 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <AlertCircle className="text-blue-600 h-6 w-6 flex-shrink-0 mt-1 hidden sm:block" />
          <div>
            <h4 className="font-semibold text-blue-900 flex items-center justify-center sm:justify-start gap-2">
              <AlertCircle className="text-blue-600 h-5 w-5 sm:hidden" />
              Important Notice for TS ePASS Applicants
            </h4>
            <p className="text-blue-800 mt-1 text-sm">
              Students claiming fee reimbursement must ensure their Income Certificate is valid for the current financial year. Caste certificates must be issued by a MeeSeva center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('application');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-4rem)]">
      
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-64 shrink-0">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
          <div className="p-6 bg-blue-900 text-white text-center">
            <div className="w-20 h-20 bg-blue-800 border-2 border-blue-400 rounded-full mx-auto mb-3 flex items-center justify-center shadow-inner">
              <span className="text-white font-bold text-2xl">SA</span>
            </div>
            <h2 className="font-bold text-lg">Student Applicant</h2>
            <p className="text-xs text-blue-200 mt-1">ID: APP-2026-8901</p>
          </div>
          <div className="p-2 flex flex-col gap-1">
            <button 
              onClick={() => setActiveTab('application')}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'application' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <FileText size={18} /> Application Form
            </button>
            <button 
              onClick={() => setActiveTab('documents')}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex justify-between items-center ${activeTab === 'documents' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="flex items-center gap-3"><Upload size={18} /> Documents</span>
              <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Pending</span>
            </button>
            <button 
              onClick={() => setActiveTab('status')}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'status' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <LayoutDashboard size={18} /> Admission Status
            </button>
            
            <div className="h-px bg-slate-200 my-2 mx-4"></div>
            
            <button 
              onClick={onLogout}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
            >
              <LogOut size={18} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        
        {/* Empty State: Application Form Tab */}
        {activeTab === 'application' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
            <div className="border-b border-slate-200 pb-5 mb-6">
              <h2 className="text-2xl font-bold text-slate-800">B.Tech Admission Form</h2>
              <p className="text-slate-500 mt-1">Please fill out your details carefully as per your SSC and EAMCET records.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-slate-200 rounded-lg bg-slate-50">
              <FileText className="h-16 w-16 text-slate-300 mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">Form Not Started</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                You haven't filled out your basic details yet. Click below to start entering your personal and academic information.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-800 transition-colors shadow-sm">
                Start Application Form
              </button>
            </div>
          </div>
        )}

        {/* Empty State: Documents Tab */}
        {activeTab === 'documents' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
             <div className="border-b border-slate-200 pb-5 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Document Uploads</h2>
                <p className="text-slate-500 mt-1 text-sm">Upload clear, scanned copies (PDF or JPG). Max size 2MB per file.</p>
              </div>
              <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1 shrink-0 w-fit">
                <AlertCircle size={14} /> Action Required
              </span>
            </div>

            <div className="space-y-4">
              {['SSC / 10th Memo', 'Intermediate / 10+2 Memo', 'TS EAMCET Rank Card', 'Caste Certificate (If applicable)', 'Income Certificate (For ePASS)'].map((doc, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3 mb-3 sm:mb-0">
                    <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
                      <FileBadge className="text-blue-400 h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 text-sm">{doc}</p>
                      <p className="text-xs text-red-500 font-medium mt-0.5">Not uploaded</p>
                    </div>
                  </div>
                  <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all inline-block text-center shadow-sm w-full sm:w-auto">
                    Select File
                  </button>
                </div>
              ))}
            </div>
            
            <div className="pt-8 flex justify-end">
              <button disabled type="button" className="bg-slate-200 text-slate-400 px-6 py-2.5 rounded-md font-medium cursor-not-allowed">
                Submit All Documents
              </button>
            </div>
          </div>
        )}

        {/* Empty State: Status Tab */}
        {activeTab === 'status' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
            <div className="bg-slate-50 border-8 border-slate-100 p-6 rounded-full mb-6">
              <LayoutDashboard className="h-12 w-12 text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">No Application Found</h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
              Your admission status will appear here once you have submitted your application form and all required documents have been verified by the college administration.
            </p>
            <button 
              onClick={() => setActiveTab('application')}
              className="mt-8 text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full transition-colors"
            >
              Go to Application Form <ChevronRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="font-sans bg-slate-100 min-h-screen text-slate-900 flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1">
        {currentView === 'home' ? (
          <LandingPage onApplyClick={() => setCurrentView('dashboard')} />
        ) : (
          <Dashboard onLogout={() => setCurrentView('home')} />
        )}
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>&copy; 2026 JNTUH Engineering College Admissions Portal. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-500">Developed for Final Year College Project.</p>
      </footer>
    </div>
  );
}
