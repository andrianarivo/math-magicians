export default function get() {
  return Promise.resolve({ data: [{ quote: 'mock quote' }] });
}
