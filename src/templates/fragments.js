const FluidImageFragment = `
    fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
        aspectRatio
        src
        srcSet
        sizes
    }
`

module.exports.FluidImageFragment = FluidImageFragment