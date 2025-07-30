import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const projectType = formData.get('project-type') as string;
        const budget = formData.get('budget') as string;
        const timeline = formData.get('timeline') as string;
        const message = formData.get('message') as string;
        
        if (!name || !email || !projectType || !budget || !timeline || !message) {
            return fail(400, { 
                error: 'Παρακαλώ συμπληρώστε όλα τα πεδία.',
                name, email, projectType, budget, timeline, message
            });
        }

        try {
            await resend.emails.send({
                from: 'Axanth Website Form <noreply@axanth.gr>',
                to: ['contact@axanth.gr'],
                subject: `Νέο αίτημα Project από ${name}`,
                replyTo: email,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; background-color: #f4f4f4;">
                        <h2 style="color: #333;">Νέο Αίτημα Επικοινωνίας από Axanth.gr</h2>
                        <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
                            <p><strong>Όνομα:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p><hr>
                            <p><strong>Τύπος Project:</strong> ${projectType}</p>
                            <p><strong>Budget:</strong> ${budget}</p>
                            <p><strong>Χρονοδιάγραμμα:</strong> ${timeline}</p><hr>
                            <p><strong>Μήνυμα:</strong></p>
                            <p style="white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                `
            });

            // --- ΑΠΟΣΤΟΛΗ 2: Email επιβεβαίωσης προς τον πελάτη (Αυτό έλειπε) ---
            await resend.emails.send({
                from: 'Axanth <noreply@axanth.gr>', // Στέλνουμε από το επίσημο email σας
                to: [email], // Στέλνουμε στη διεύθυνση που έδωσε ο πελάτης
                subject: 'Επιβεβαίωση Λήψης του Αιτήματός σας | Axanth',
                html: `
                    <div style="font-family: sans-serif; line-height: 1.6;">
                        <h3>Ευχαριστούμε για την επικοινωνία, ${name}!</h3>
                        <p>Λάβαμε το αίτημά σας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό, συνήθως εντός 24 ωρών.</p>
                        <p>Με εκτίμηση,<br>Η ομάδα της Axanth</p>
                        <hr>
                        <p style="font-size: 0.8em; color: #888;">Αυτό είναι ένα αυτοματοποιημένο μήνυμα.</p>
                    </div>
                `
            });

            // Τώρα επιστρέφουμε το τελικό μήνυμα επιτυχίας
            return { success: true, message: 'Το μήνυμά σας στάλθηκε! Θα λάβετε ένα email επιβεβαίωμσης σε λίγα λεπτά.' };

        } catch (error) {
            console.error('Resend error:', error);
            return fail(500, { 
                error: 'Παρουσιάστηκε ένα σφάλμα. Παρακαλώ δοκιμάστε ξανά.',
                name, email, projectType, budget, timeline, message
            });
        }
    }
};