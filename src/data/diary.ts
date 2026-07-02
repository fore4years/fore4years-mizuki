// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"今天读完了《认知觉醒》，决定开始反思。之所以会有这个决定，是因为有一点说动我了：未来可能会有一天遗忘掉如今反思出来的，需要改变的点",
		date: "2026-06-30T14:49:00Z",
		// images: ["/images/diary/sakura.jpg", "/images/diary/1.webp"],
	},
	{
		id: 2,
		content: "本来说是每天反思，昨天就给忘了。。。。，今天续上：1.首先就是要把反思习惯练出来；2.这两天对于手机的控制又要回去了，得注意了；3.冥想也要排上日程。",
		date: "2026-06-30T14:49:00Z",
	}
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
