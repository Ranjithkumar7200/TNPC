import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScrollView,Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const Transaction = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity>
        <View style={styles.filter}>
          <Text style={styles.filterText}>Filter</Text>
          <AntDesign name="filter" size={12} color="#8A2BE2" />
        </View>
      </TouchableOpacity>

      <View style={styles.history}>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>Today</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>6 October 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>4 September 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>6 August 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>1 August 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>30 July 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>30 May 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>30 April 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transationDetails}>
          <View style={styles.day}>
            <Text style={styles.dayText}>30 March 2023</Text>
          </View>
          <View style={styles.withdrawContainer}>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 250
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request placed</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.withdraw}>
                <View>
                  <Text style={styles.withdrawText}>
                    Withdraw of amount ₹ 500
                  </Text>
                </View>
                <View>
                  <Text style={styles.withdrawText}>Request Approved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Transaction;
