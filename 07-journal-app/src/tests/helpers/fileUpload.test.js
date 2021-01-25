import cloudinary from 'cloudinary';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dhek4wrpi',
  api_key: '634377729397665',
  api_secret: '4ytXP2UtvLtZ7gMz_pgyTTDNXwY'
});

describe('Tests in fileUpload helper', () => {
  test('should upload a file and return it', async (done) => {
    const resp = await fetch(
      'http://4.bp.blogspot.com/-YuwzqfLzpXA/TxUt0AuMHLI/AAAAAAAABUs/jqE1PYl3N8M/s1600/Luffy_One_Piece_Chibi.png'
    );
    const blob = await (resp && resp.blob());
    const file = new File([blob], 'photo.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    // delete img by id
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    console.log(imageId);

    await cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });
  test('should return an error', async () => {
    const file = new File([], 'photo.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
