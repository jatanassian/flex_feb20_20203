export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json({ name: 'GET data!!' });
	}
	if (req.method === 'POST') {
		res.status(200).json({ name: 'POST data!!' });
	}
}
