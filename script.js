import { pipeline } from '@xenova/transformers';

document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const genre = document.getElementById('genre').value;
    
    const generator = await pipeline('text-generation', 'Xenova/gpt-2'); // Use GPT-2 for testing (smaller)
    const story = await generator(`Write a ${genre} children's story titled "${title}".`);
    
    document.getElementById('bookOutput').innerText = story[0].generated_text;
});
