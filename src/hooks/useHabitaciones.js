import {graphql,useStaticQuery} from 'gatsby'

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
            query {
                allDatoCmsHabitacion {
                    nodes {
                        titulo
                        id
                        slug
                        contenido
                        imagen {
                            fluid(maxWidth:1200) {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                    }
                }
            }
    `)
    //console.log(data)

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        slug: habitacion.slug,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen
    }))
}
 
export default useHabitaciones;