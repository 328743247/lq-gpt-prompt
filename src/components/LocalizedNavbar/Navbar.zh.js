const zhNavbar = {
  hideOnScroll: true,
  title: "",
  logo: {
    alt: "AiAsker",
    src: "img/img.png",
  },
  items: [
    {
      to: "http://aiasker.online",
      label: "ChatGPT 白嫖站",
      position: "left",
    },
   {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: "ChatGpt白嫖站",
          href: "http://aiasker.online",
        },
        {
          label: '购买open ai账号',
          href: 'http://salekey.online/',
        },
      ],
    },
    // {
    //   to: "https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",
    //   label: "反馈/添加提示词",
    //   position: "left",
    // },
    // { type: "localeDropdown", position: "right" },
    // {
    //   href: "https://github.com/rockbenben/ChatGPT-Shortcut",
    //   position: "right",
    //   className: "header-github-link",
    // },
    // {
    //   href: "https://discord.gg/PZTQfJ4GjX",
    //   position: "right",
    //   className: "header-discord-link",
    // },
  ],
};

module.exports = zhNavbar;
