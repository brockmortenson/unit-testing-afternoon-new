import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText shortens text over 100 characters and adds 3 periods at the end', () => {
    const shortened = shortenText(longText);

    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('value of wordCount is equal to 233 words', () => {
    expect(wordCount(posts)).toBe(233);
});

test('passing in users and posts to attachUserName attaches a displayName property to every post', () => {
    const newPosts = attachUserName(users, posts);

    expect(newPosts[0]).toHaveProperty('displayName');
});

test('posts with no matching user are removed', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    
    expect(newPosts).not.toContainEqual(deletedPost);
});