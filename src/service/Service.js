export default class Service {
  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`no fetch ${url} + recived ${res.status}`);
    }
    return await res.json();
  };

  getCat = async () => {
    const res = await this.getResource(
      `https://api.thecatapi.com/v1/images/search?limit=1&size=full`
    );
    return res;
  };
}

export const service = new Service();
