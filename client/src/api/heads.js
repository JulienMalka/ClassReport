import config from './config';

const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const urlParams = Object.entries(params).map(e => e.join('=')).join('&');

const getHeads = (imageBlob) => {

    return fetch(`${config.faceUri}?${urlParams}`, {
        method: 'POST',
        body: imageBlob,
        processData: false,
        contentType: false,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': config.faceKey
        }
    }).then(response => response.json());

};

export default getHeads;
