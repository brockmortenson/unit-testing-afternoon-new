import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { longText, posts } from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('renders PostWidget and checks if the inner text content contains the passed in posts text content', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(post.text);
});

it('passing through longPost should shorten the displayed text by default', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...longPost} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(shortenText(longPost.text));
});

it('passing through longPost to Postwidget with an extended prop displays all text', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(longPost.text);
});