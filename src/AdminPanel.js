import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Eye, EyeOff, Settings, LogOut, Shield } from 'lucide-react';

const AdminPanel = ({ darkMode, onClose, unitsConfig, onUpdateConfig }) => {
  const [activeTab, setActiveTab] = useState('units');

  const handleToggleUnit = (unitId) => {
    const newConfig = {
      ...unitsConfig,
      units: unitsConfig.units.map(u => 
        u.id === unitId ? { ...u, available: !u.available } : u
      )
    };
    onUpdateConfig(newConfig);
  };

  const handleToggleSlide = (unitId, slideIndex) => {
    const newConfig = {
      ...unitsConfig,
      hiddenSlides: {
        ...unitsConfig.hiddenSlides,
        [unitId]: {
          ...(unitsConfig.hiddenSlides[unitId] || {}),
          [slideIndex]: !(unitsConfig.hiddenSlides[unitId]?.[slideIndex])
        }
      }
    };
    onUpdateConfig(newConfig);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Admin Control Panel</h2>
                <p className="text-sm opacity-90">Manage units and content visibility</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className={`flex border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => setActiveTab('units')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'units'
                ? darkMode
                  ? 'bg-gray-800 text-white border-b-2 border-orange-500'
                  : 'bg-gray-50 text-gray-900 border-b-2 border-orange-500'
                : darkMode
                  ? 'text-gray-400 hover:bg-gray-800/50'
                  : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Units Control
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 px-6 py-4 font-semibold transition-colors ${
              activeTab === 'settings'
                ? darkMode
                  ? 'bg-gray-800 text-white border-b-2 border-orange-500'
                  : 'bg-gray-50 text-gray-900 border-b-2 border-orange-500'
                : darkMode
                  ? 'text-gray-400 hover:bg-gray-800/50'
                  : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Settings
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'units' && (
            <div className="space-y-4">
              {unitsConfig.units.map((unit) => (
                <div
                  key={unit.id}
                  className={`p-4 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{unit.icon}</span>
                      <div>
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Unit {unit.id}: {unit.title}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {unit.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleToggleUnit(unit.id)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                        unit.available
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                      }`}
                    >
                      {unit.available ? (
                        <>
                          <Unlock className="w-4 h-4" />
                          Visible
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          Hidden
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-lg border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Current Configuration
                </h3>
                <div className="space-y-2 text-sm">
                  <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <span className="font-semibold">Visible Units:</span>{' '}
                    {unitsConfig.units.filter(u => u.available).length} / {unitsConfig.units.length}
                  </div>
                  <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <span className="font-semibold">Admin Password:</span> admin123 (change in code)
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg border border-orange-500/30 ${
                darkMode ? 'bg-orange-900/20' : 'bg-orange-50'
              }`}>
                <h3 className={`font-semibold mb-2 flex items-center gap-2 ${
                  darkMode ? 'text-orange-300' : 'text-orange-900'
                }`}>
                  <Settings className="w-5 h-5" />
                  Important Notes
                </h3>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-orange-200' : 'text-orange-800'}`}>
                  <li>• Changes are saved to browser localStorage</li>
                  <li>• Students cannot access admin panel without password</li>
                  <li>• Hidden units appear as "Coming Soon" to students</li>
                  <li>• Logout to return to student view</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminLogin = ({ darkMode, onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Admin password - CHANGE THIS IN PRODUCTION
    if (password === 'admin123') {
      onLogin();
      setError('');
    } else {
      setError('Invalid password! Try: admin123');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`max-w-md w-full rounded-xl shadow-2xl overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Admin Login</h2>
          </div>
          <p className="text-sm opacity-90">Enter password to access control panel</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  error
                    ? 'border-red-500 focus:border-red-600'
                    : darkMode
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-orange-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'
                } outline-none transition-colors`}
                placeholder="Enter admin password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Login to Admin Panel
          </button>

          <div className={`p-4 rounded-lg ${
            darkMode ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'
          }`}>
            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
              <strong>Default Password:</strong> admin123
            </p>
            <p className={`text-xs mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              (Change this in the code for production)
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AdminPanel, AdminLogin };