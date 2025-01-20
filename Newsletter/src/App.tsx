import React from 'react';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Email Template Previews</h1>
        
        <div className="space-y-4">
          <a 
            href="/emails/aerius.html" 
            target="_blank"
            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span className="font-medium text-blue-900">Aerius Template</span>
            </div>
            <span className="text-blue-600">→</span>
          </a>

          <a 
            href="/emails/nasonex.html" 
            target="_blank"
            className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" />
              <span className="font-medium text-green-900">Nasonex Template</span>
            </div>
            <span className="text-green-600">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;