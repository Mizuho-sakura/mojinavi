tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"BIZ UDPGothic"', 'sans-serif'],
                    },
                    colors: {
                        appbg: '#F8FAFC',
                        surface: '#FFFFFF',
                        primary: '#3B82F6',
                        primaryHover: '#2563EB',
                        secondary: '#DBEAFE',
                        textmain: '#1E293B',
                        textmuted: '#64748B',
                        bordercolor: '#E2E8F0',
                        success: '#10B981',
                        warning: '#F59E0B',
                        danger: '#EF4444'
                    },
                    boxShadow: {
                        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                        'custom-top': '0 -4px 6px -1px rgba(0, 0, 0, 0.05)',
                        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
                    },
                    borderRadius: {
                        'custom': '16px',
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.3s ease-out',
                        'bounce-slight': 'bounceSlight 0.5s ease-in-out',
                    },
                    keyframes: {
                        fadeIn: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                        bounceSlight: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' } },
                    }
                }
            }
        }