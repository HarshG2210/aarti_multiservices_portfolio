import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb fontWeight="medium" fontSize="lg" p={4} bg={"#015ade"}>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/" color={"white"}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <BreadcrumbItem key={name}>
            <BreadcrumbLink as={RouterLink} to={routeTo}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
