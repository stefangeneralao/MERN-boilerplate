import { Router } from 'express';
import { getNotes, addNote, addNoteItem } from '../controllers/notes';
const router = new Router();

router.route('/notes').get(getNotes);
router.route('/note').post(addNote);
router.route('/noteitem').post(addNoteItem);

export default router;