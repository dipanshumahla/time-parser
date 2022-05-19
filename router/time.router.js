const http = require("../utils/http.util");

const TIME_URL_HOST = 'time.com';
const TIME_URL_PATH = '';

const TIME_LINK = 'https://time.com';

const All_STORIES_REGEX = /(?<=class="featured-voices__list-item">)([\s\S]*?)(<\/li>)/g;
const STORY_LINK_REGEX = /(?<=href=")([^(\https)].*?)(?=")/g;
const STORY_CONTENT_REGEX = /(?<=class="featured-voices__list-item-headline display-block">)(.*?)(?=<\/h3>)/g;

async function stories(req) {
    const stories = [];

    const html = await http.get(TIME_URL_HOST, TIME_URL_PATH);
    const allStories = html.match(All_STORIES_REGEX);

    for (const story of allStories) {
        const storyLink = story.match(STORY_LINK_REGEX);
        const storyContent = story.match(STORY_CONTENT_REGEX);

        stories.push({
            link: TIME_LINK + storyLink[0],
            title: storyContent[0]
        });
    }

    return stories;
}

const TimeRouter = {
    stories
};

module.exports = TimeRouter;