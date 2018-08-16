/* eslint-disable no-console */

export default function intentHandler(state, emitter) {
  window.addEventListener(
    'message',
    event => {
      fetch(event.data)
        .then(res => res.blob())
        .then(blob => {
          emitter.emit('addFiles', { files: [blob] });
          emitter.emit('upload', {});
        })
        .catch(e => console.error('ERROR ' + e + ' ' + e.stack));
    },
    false
  );
}
