export const Networks = {
    MainNet: 1, 
    Ropsten: 3,
    Rinkeby: 4,
    Goerli:  5,
    Kovan:   42
}

export const shorten = (str: string) => 
    str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str