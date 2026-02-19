import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy, Sun, Moon, Home, Shield, Lock, Unlock, Eye, EyeOff, LogOut } from 'lucide-react';
import Unit2 from './Unit2';

// Static unit definitions (never changes)
const UNIT_DEFINITIONS = [
  {
    id: 1,
    title: 'Unit 1: Introduction to Programming',
    description: 'Basics of programming, flowcharts, and algorithms',
    topics: 8,
    color: 'from-red-500 to-orange-500',
    icon: '🚀',
    component: null,  // not used yet
  },
  {
    id: 2,
    title: 'Unit 2: Operators and Control Structures',
    description: 'Arithmetic, relational, logical operators, loops, and arrays',
    topics: 8,
    color: 'from-blue-500 to-purple-500',
    icon: '⚡',
    component: Unit2,
  },
  {
    id: 3,
    title: 'Unit 3: Functions and Recursion',
    description: 'Function declaration, call by value/reference, recursion',
    topics: 6,
    color: 'from-green-500 to-teal-500',
    icon: '🔄',
    component: null,
  },
  {
    id: 4,
    title: 'Unit 4: Pointers and Structures',
    description: 'Pointer basics, arrays and pointers, structures and unions',
    topics: 7,
    color: 'from-yellow-500 to-orange-500',
    icon: '👉',
    component: null,
  },
  {
    id: 5,
    title: 'Unit 5: File Handling',
    description: 'File operations, reading, writing, and file management',
    topics: 5,
    color: 'from-pink-500 to-rose-500',
    icon: '📁',
    component: null,
  }
];

// Admin Login Component
const AdminLogin = ({ darkMode, onLogin, onCancel }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid password!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full rounded-xl shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Shield className="w-8 h-8" />
            Admin Login
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                } outline-none`}
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className={`flex-1 py-3 rounded-lg font-semibold ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-900'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg"
            >
              Login
            </button>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <strong>Password:</strong> admin123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Admin Panel Component
const AdminPanel = ({ darkMode, onClose, units, onToggleUnit }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Admin Control Panel
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] space-y-4">
          {units.map((unit) => (
            <div key={unit.id} className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{unit.icon}</span>
                  <div>
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {unit.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {unit.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onToggleUnit(unit.id)}
                  className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                    unit.available ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  {unit.available ? <><Unlock className="w-4 h-4" />Visible</> : <><Lock className="w-4 h-4" />Hidden</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Store only availability flags (by id)
  const [unitAvailability, setUnitAvailability] = useState(() => {
    // Default: only unit 2 is available
    const defaultAvailability = {};
    UNIT_DEFINITIONS.forEach(u => {
      defaultAvailability[u.id] = u.id === 2;
    });
    return defaultAvailability;
  });

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');

    const savedAvailability = localStorage.getItem('unitAvailability');
    if (savedAvailability) {
      try {
        const parsed = JSON.parse(savedAvailability);
        setUnitAvailability(parsed);
      } catch (e) {}
    }

    const adminSession = sessionStorage.getItem('isAdmin');
    if (adminSession === 'true') setIsAdmin(true);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Save availability
  useEffect(() => {
    localStorage.setItem('unitAvailability', JSON.stringify(unitAvailability));
  }, [unitAvailability]);

  // Derive full units array with available status
  const units = UNIT_DEFINITIONS.map(def => ({
    ...def,
    available: unitAvailability[def.id] || false,
  }));

  // Derived data for display
  const availableUnits = units.filter(u => u.available).length;
  const totalUnits = units.length;
  const overallProgress = (availableUnits / totalUnits) * 100;

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleAdminLogin = () => {
    setIsAdmin(true);
    sessionStorage.setItem('isAdmin', 'true');
    setShowAdminLogin(false);
    setShowAdminPanel(true);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('isAdmin');
  };

  const handleToggleUnit = (unitId) => {
    setUnitAvailability(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  // If a unit is selected, show that unit
  if (selectedUnit) {
    const UnitComponent = selectedUnit.component;
    // Safety check in case component is missing
    if (!UnitComponent) {
      return <div className="p-8 text-center">Unit content not available</div>;
    }

    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
        <div className={`backdrop-blur-lg border-b transition-colors duration-300 ${
          darkMode ? 'bg-black/30 border-white/10' : 'bg-white/70 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedUnit(null)}
                  className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                >
                  <Home className="w-5 h-5" />
                </button>
                <div>
                  <h1 className={`text-2xl font-bold flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    <span className="text-3xl">{selectedUnit.icon}</span>
                    {selectedUnit.title}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <button
                    onClick={() => setShowAdminPanel(true)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />Admin
                  </button>
                )}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                >
                  {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <UnitComponent darkMode={darkMode} />
        </div>
        {showAdminPanel && (
          <AdminPanel
            darkMode={darkMode}
            onClose={() => setShowAdminPanel(false)}
            units={units}
            onToggleUnit={handleToggleUnit}
          />
        )}
      </div>
    );
  }

  // Home screen - Unit selection
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <div className={`backdrop-blur-lg border-b transition-colors duration-300 ${
        darkMode ? 'bg-black/30 border-white/10' : 'bg-white/70 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-3xl font-bold flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <BookOpen className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                C Programming - PPS Course
                {isAdmin && <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-full">Admin</span>}
              </h1>
              <p className={`text-base mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Interactive Learning Platform - Select a unit to begin
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isAdmin ? (
                <>
                  <button
                    onClick={() => setShowAdminPanel(true)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Shield className="w-5 h-5" />Control Panel
                  </button>
                  <button
                    onClick={handleAdminLogout}
                    className={`px-4 py-2 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'}`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  <Shield className="w-4 h-4" />Admin
                </button>
              )}
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <div className="text-right">
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Course Progress</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{availableUnits}/{totalUnits}</div>
              </div>
              <Trophy className={`w-10 h-10 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            </div>
          </div>
          <div className={`mt-4 rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-700/50' : 'bg-gray-300'}`}>
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" style={{ width: `${overallProgress}%` }} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <div
              key={unit.id}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                darkMode ? 'bg-white/10 hover:bg-white/15' : 'bg-white hover:shadow-2xl'
              } ${unit.available ? 'cursor-pointer' : 'opacity-75'}`}
              onClick={() => unit.available && setSelectedUnit(unit)}
            >
              <div className={`bg-gradient-to-r ${unit.color} p-6 text-white relative`}>
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{unit.icon}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    unit.available ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {unit.available ? 'Available' : 'Coming Soon'}
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl font-bold">{unit.id}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{unit.title}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{unit.description}</p>
                <div className="flex items-center justify-between">
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="font-semibold">{unit.topics}</span> topics
                  </div>
                  {unit.available ? (
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                      Start Learning →
                    </button>
                  ) : (
                    <div className={`px-4 py-2 rounded-lg text-sm font-semibold ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
              {!unit.available && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                  <div className={`px-6 py-3 rounded-full font-semibold ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
                    🔒 Locked
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-xl ${darkMode ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'}`}>
          <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>📚 About This Course</h3>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            This interactive platform covers the complete C Programming syllabus. Each unit contains concept explanations, 
            interactive quizzes with logical pattern questions, and hands-on coding challenges. New units will be added progressively 
            as you advance through the course. Start with Unit 2 to learn about operators, control structures, and arrays!
          </p>
        </div>
      </div>

      {showAdminLogin && (
        <AdminLogin
          darkMode={darkMode}
          onLogin={handleAdminLogin}
          onCancel={() => setShowAdminLogin(false)}
        />
      )}

      {showAdminPanel && (
        <AdminPanel
          darkMode={darkMode}
          onClose={() => setShowAdminPanel(false)}
          units={units}
          onToggleUnit={handleToggleUnit}
        />
      )}
    </div>
  );
};

export default App;