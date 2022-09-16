// library imports
import React from 'react';

//helpers & hooks imports
import useFetch from '../../hooks/useFetch';
import { services } from '../../constants/servicesConstants';

// crud imports
import { fetchServices } from '../../crud/services/services.crud';

const Services = () => {
  const { data, error, status } = useFetch({
    queryRepo: services.HAIRCUT,
    apiCall: fetchServices(services.HAIRCUT),
  });

  return (
    <div>
      Services
    </div>
  )
}

export default Services;