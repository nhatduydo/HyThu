import { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#c85d6a',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    Button: {
      primaryColor: '#ffffff',
      borderRadius: 9999,
      controlHeight: 40,
      fontWeight: 600,
    },
    Card: {
      borderRadius: 16,
      paddingLG: 24,
    },
    Menu: {
      itemHoverBg: 'rgba(200, 93, 106, 0.08)',
      itemSelectedBg: 'rgba(200, 93, 106, 0.12)',
      itemActiveBg: 'rgba(200, 93, 106, 0.18)',
    },
    Layout: {
      headerBg: '#ffffff',
    },
  },
}

