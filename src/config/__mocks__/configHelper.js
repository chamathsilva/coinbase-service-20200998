export const fetchDatabaseConfigs = jest.fn();
fetchDatabaseConfigs.mockRejectedValueOnce(new TypeError(''));
fetchDatabaseConfigs.mockResolvedValueOnce({});

