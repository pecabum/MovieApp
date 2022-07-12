import reactotron from 'reactotron-react-native';

/**
 * @param url
 * @returns
 */
export const request = (url: string) => {
  return fetch(url)
    .then((res: any) => res.json())
    .catch((error: any) => {
      reactotron.log!('error', error);
    });
};
