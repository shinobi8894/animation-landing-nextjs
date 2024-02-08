import Flex from "@/components/flex";
import Heading from "@/components/heading";
import List, { Item } from "@/components/list";
import Button from "@/components/button";
import Text from "@/components/text";
import withWrapper from "@/hoc/withWrapper";

const Header = () => {

    return (
        <Flex $flex $align="center" $justify="space-between">
            <Heading $color="white" $level={6}>DELATTIO</Heading>
            <List $row $gap={3}>
                <Item>Buy</Item>
                <Item>Sell</Item>
                <Item>Rent</Item>
                <Item>Properties</Item>
            </List>
            <Flex $gap={1}>
                <Button>
                    <Text $level={7}>Sign in</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

Header.displayName = 'Header';

export default withWrapper(Header);