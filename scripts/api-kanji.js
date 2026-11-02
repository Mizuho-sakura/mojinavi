export const KanjiService = {
    async fetchInfo(char) {
        try {
            const res = await fetch(`https://kanjiapi.dev/v1/kanji/${char}`);
            if (!res.ok) throw new Error("API Error");
            return await res.json();
        } catch (e) {
            return { kanji: char, meanings: ["(データなし)"], on_readings: [], kun_readings: [], grade: "?" };
        }
    },
    
    async fetchWords(char) {
        try {
            const res = await fetch(`https://kanjiapi.dev/v1/words/${char}`);
            if (!res.ok) return [];
            const words = await res.json();
            return words.filter(w => w.variants[0].written.length <= 4).slice(0, 4);
        } catch(e) { return []; }
    },

    async fetchKanjiVG(char) {
        const unicodeHex = char.charCodeAt(0).toString(16).padStart(5, '0');
        const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg/kanji/${unicodeHex}.svg`;
        
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("SVG Not Found");
            return await res.text();
        } catch (e) {
            return null;
        }
    }
};