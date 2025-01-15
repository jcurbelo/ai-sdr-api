import { changelog } from '@/app/api/changelog/changelog';
import { NextResponse } from 'next/server';

interface Section {
    title: string;
    content: string;
}

interface ChangelogEntry {
    date: string;
    title: string;
    description: string;
    content: string;
    sections: Section[];
}


const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
    throw new Error('SLACK_WEBHOOK_URL is not set');
}

export async function GET() {

    return new NextResponse(JSON.stringify(changelog), {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    try {
        const entry: ChangelogEntry = await request.json();

        // Create markdown formatted text
        const markdownText = `📣 *New Update!*

📅 ${entry.date}

${entry.description}

${entry.content}

---
💡 Create a X post with <https://chatgpt.com/g/g-678815d85934819185a5cc9f59425f4b-megaphone|*Megaphone*>`

        // Send to Slack webhook
        const slackResponse = await fetch(SLACK_WEBHOOK_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: markdownText
            })
        });

        if (!slackResponse.ok) {
            throw new Error('Failed to send to Slack');
        }

        return new NextResponse(JSON.stringify({ success: true, text: markdownText }), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse(
            JSON.stringify({ error: 'Failed to process request' }),
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
} 