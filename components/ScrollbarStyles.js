import { useEffect } from 'react';
import { Platform } from 'react-native';

const ScrollbarStyles = () => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Create and inject CSS for scrollbars
      const style = document.createElement('style');
      style.textContent = `
        /* Force scrollbars to be visible */
        * {
          scrollbar-width: thin !important;
          scrollbar-color: #888 #f1f1f1 !important;
        }
        
        /* Custom webkit scrollbars */
        *::-webkit-scrollbar {
          width: 8px !important;
          height: 8px !important;
          display: block !important;
          -webkit-appearance: none !important;
        }
        
        *::-webkit-scrollbar-track {
          background: #f1f1f1 !important;
          border-radius: 4px !important;
        }

        *::-webkit-scrollbar-thumb {
          background: #888 !important;
          border-radius: 4px !important;
          border: 1px solid #f1f1f1 !important;
          min-height: 20px !important;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #555 !important;
        }
        
        /* Force body and html to show scrollbars */
        html, body {
          overflow-y: scroll !important;
          height: 100vh !important;
        }
        
        /* Force React Native ScrollView to show scrollbars */
        div[style*="overflow"] {
          overflow-y: scroll !important;
          scrollbar-width: thin !important;
        }

        /* Target React Native Web generated classes */
        .css-view-1dbjc4n {
          overflow-y: scroll !important;
          scrollbar-width: thin !important;
        }
        
        .css-view-1dbjc4n::-webkit-scrollbar {
          width: 8px !important;
          display: block !important;
        }

        /* Force all divs with overflow to show scrollbars */
        div {
          scrollbar-width: thin !important;
        }

        div::-webkit-scrollbar {
          width: 8px !important;
          display: block !important;
        }
      `;
      
      document.head.appendChild(style);
      
      // Cleanup function
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollbarStyles;
