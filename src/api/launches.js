const API_URL = 'https://api.spacexdata.com/v5'

export async function getAllLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchById(id) {
  try {
    const response = await fetch(`${API_URL}/launches/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
