import type { FooterConfig } from "../types/config";

// 页脚配置
export const footerConfig: FooterConfig = {
	enable: true, // 是否启用Footer HTML注入功能
	customHtml: "<footer style=\"background-color: #1a1a2e; color: #aaa; text-align: center; padding: 30px 20px; font-size: 14px; border-top: 1px solid #333;\">\n" +
		"\n" +
		"    <!-- 备案号（带跳转链接） -->\n" +
		"    <p style=\"margin: 0;\">\n" +
		"        <a href=\"https://beian.miit.gov.cn/\" \n" +
		"           target=\"_blank\" \n" +
		"           rel=\"noopener noreferrer\"\n" +
		"           style=\"color: #888; text-decoration: none; transition: color 0.3s;\"\n" +
		"           onmouseover=\"this.style.color='#4fc3f7'\"\n" +
		"           onmouseout=\"this.style.color='#888'\">\n" +
		"           蜀ICP备2025177764号-1\n" +
		"        </a>\n" +
		"    </p>\n" +
		"\n" +
		"</footer>", // HTML格式的自定义页脚信息，例如备案号等，默认留空
	// 也可以直接编辑 FooterConfig.html 文件来添加备案号等自定义内容
	// 注意：若 customHtml 不为空，则使用 customHtml 中的内容；若 customHtml 留空，则使用 FooterConfig.html 文件中的内容
	// FooterConfig.html 可能会在未来的某个版本弃用
};
